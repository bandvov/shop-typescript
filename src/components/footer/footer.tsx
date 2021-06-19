import { Box, Column, Row, Container, FooterLink } from './footer-styles';

const columns = {
  first: [
    { name: 'Kitchen', path: '#' },
    { name: 'Badroom', path: '#' },
    { name: 'Leaving room', path: '#' },
  ],
  second: [
    { name: 'Hallways', path: '#' },
    { name: 'Office furniture', path: '#' },
    { name: 'Kids room', path: '#' },
  ],
  third: [
    { name: 'Wardrobe', path: '#' },
    { name: 'Matress', path: '#' },
    { name: 'Soft furniture', path: '#' },
  ],
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
