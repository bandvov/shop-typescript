import Div from './common/div';
const footerFirstColumn = ['Kitchen', 'Badroom', 'Leaving room'];

const footerSecondColumn = ['Hallways', 'Office furniture', 'Kids room'];
const footerThirdColumn = ['Wardrobe', 'Matress', 'Soft furniture'];

function Footer(): React.ReactElement {
  const mappedFirstColumn = footerFirstColumn.map((item) => {
    return (
      <Div key={item} color="white" background="black">
        {item}
      </Div>
    );
  });

  const mappedSecondColumn = footerSecondColumn.map((item) => {
    return (
      <Div key={item} color="white" background="black">
        {item}
      </Div>
    );
  });

  const mappedThirdColumn = footerThirdColumn.map((item) => {
    return (
      <Div key={item} color="white" background="black">
        {item}
      </Div>
    );
  });

  return (
    <Div
      background="black"
      justify="space-between"
      padding="1rem 6rem"
      height="100%"
    >
      <Div background="black">
        <Div
          margin="0 1rem 0 0"
          background="black"
          direction="column"
          align="flex-start"
        >
          {mappedFirstColumn}
        </Div>
        <Div
          margin="0 1rem 0 0"
          background="black"
          direction="column"
          align="flex-start"
        >
          {mappedSecondColumn}
        </Div>
        <Div
          margin="0 1rem 0 0"
          background="black"
          direction="column"
          align="flex-start"
        >
          {mappedThirdColumn}
        </Div>
      </Div>
      <Div color="white" background="black" direction="column" align="flex-end">
        <Div
          color="white"
          background="black"
          padding="0"
          fontSize="3rem"
          align="flex-end"
        >
          LM
        </Div>
        <Div color="white" background="black" justify="flex-end">
          Lorem ipsum dolor sit amet consectetur.
        </Div>
        <Div color="white" background="black" justify="flex-end">
          Lorem ipsum amet consectetur.
        </Div>
      </Div>
    </Div>
  );
}

export default Footer;
