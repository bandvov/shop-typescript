import Div from './common/div';

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

  const mappedColumns = columnSValues.map((column) => {
    return (
      <Div
        key={column[0].name}
        margin="0 1rem 0 0"
        background="black"
        direction="column"
        align="flex-start"
      >
        {column.map((item) => {
          return (
            <Div key={item.name} color="white" background="black">
              {item.name}
            </Div>
          );
        })}
      </Div>
    );
  });

  return (
    <Div
      background="secondary"
      justify="space-between"
      padding="1rem 6rem"
      height="100%"
    >
      <Div background="black">{mappedColumns}</Div>
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
