import { Response, Request } from "express"

export const catchErrors = (fn: Function) => (req: Request, res: Response, next: Function)  => {
    return fn(req, res, next).catch((error) => {
      if (typeof error === "string") {      
        res.status(400).json({ message: error });
      }
      next(error);
    });
  };

  export const notFound = (req: Request, res: Response, next: Function) => {
    res.status(404).json({ message: "Route not found" });
  };
  
  export const mongooseError = (err:{errors: string[]}, req: Request, res:Response, next: Function) => {
    if (!err.errors) return next(err);
    const errorKeys = Object.keys(err.errors);
    let message = "";
    errorKeys.forEach((key) => (message += err.errors[key].message + ", "));
    message = message.substr(0, message.length - 2);
    res.status(400).json({ message });
  };