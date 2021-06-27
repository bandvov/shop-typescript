import { Box, Column, Row, Container, FooterLink } from './footer-styles';
import { CATEGORIES, PRODUCT_CATEGORY_PATH } from '../../configs/constants';

const path = PRODUCT_CATEGORY_PATH + '/';

const getCategoriesForFooter = (from = 0,to = CATEGORIES.length): {name:string,path:string}[] => {
 return CATEGORIES.slice(from, to).map(category => {
    return {name: category.name, path: path + category.name};
  });
};
const columns = {
  first: getCategoriesForFooter(0,3),
  second: getCategoriesForFooter(3,6),
  third: getCategoriesForFooter(6,9),
};

function Footer(): React.ReactElement {
  const columnSValues = Object.values(columns);

  const mappedColumns = columnSValues.map((column,i) => {
    return (
    <Column key={column[i].name}>
        {column.map((item) => {
          return (
            <FooterLink href={item.path} key={item.name}>
              {item.name}
            </FooterLink>
          );
        })}
      </Column>
    );
  });

  return (
    <Box>
      <Container > 
          <Row>
            {mappedColumns}           
          </Row>
          <Row>
            <Column>
              <Row right>
                <FooterLink href='#'><h1>
                  LM
                  </h1>
                  </FooterLink>
              </Row>
              <Row right>
               <FooterLink href='#'>            
                  Lorem ipsum dolor sit amet consectetur.                
                 </FooterLink>
              </Row>
              <Row color='white' right>
                Lorem ipsum amet consectetur.
              </Row>   
            </Column>
          </Row>
      </Container>
    </Box>
  );
}

export default Footer;
