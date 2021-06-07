import Div from './common/div';

function Footer():React.ReactElement {
    return (
        <Div background='black' justify='space-between' padding='2rem 6rem' height='100%'>
            <Div>
                <Div background='black' direction='column' align='flex-start'>
                    <Div background='black' color='white'>Kitchen</Div>
                    <Div background='black' color='white'>Badroom</Div>
                    <Div background='black' color='white'>Leaving room</Div>
                </Div>
                <Div background='black' direction='column' align='flex-start'>
                    <Div background='black' margin='0 1rem' color='white'>Hallways</Div>
                    <Div background='black' margin='0 1rem' color='white'>Office furniture</Div>
                    <Div background='black' margin='0 1rem' color='white'>Kids room</Div>
                </Div>
                <Div background='black' direction='column' align='flex-start'>
                    <Div background='black' margin='0 1rem' color='white'>Wardrobe</Div>
                    <Div background='black' margin='0 1rem' color='white'>Matress</Div>
                    <Div background='black' margin='0 1rem' color='white'>Soft furniture</Div>
                </Div>
            </Div>
            <Div color='white' background='black' direction='column' align='flex-end'>
                <Div color='white' background='black' border='3px solid red' padding='0' fontSize='3rem' align='flex-end'>LM</Div>
                <Div color='white' background='black' justify='flex-end'>
                    Lorem ipsum dolor sit amet consectetur.
                </Div>
                <Div color='white' background='black' justify='flex-end'>
                    Lorem ipsum amet consectetur.
                </Div>              
            </Div>
        </Div>
    );
}

export default Footer;
