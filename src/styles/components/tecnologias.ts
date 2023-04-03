import {styled} from '../stitches.config'

export const StyledTecnologiasDiv = styled('div', {
    width: '21.75rem',
    height: '13rem',
    backgroundColor: '$bgcards',
    borderRadius: '1rem',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    padding:'2rem',

    span: {
        fontSize: '$lg'
    }
})

export const StyledDivContainer = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '1rem',
    gap: '1rem'

})

export const StyledDivItem = styled('div', {
    backgroundColor: '#CB92B1',
    color: 'black',
    borderRadius: '1rem',
    width: '5.25rem',
    height: '1.50rem',
    fontSize: '$md',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})