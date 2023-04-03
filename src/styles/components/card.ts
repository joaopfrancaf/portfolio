import {styled} from '../stitches.config'

export const CardDivStyled = styled('div', {
    maxWidth: '28.813rem',
    height: '11.625rem',
    backgroundColor: '$bgcards',
    borderRadius: '1rem',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    padding: '2rem',

})

export const CardTitletyled = styled('div', {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',

    h3: {
        marginLeft: '1rem',
    }
})

export const CardButtonstyled = styled('div', {
    marginTop: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.50rem',

    button: {
        backgroundColor: '$bgcards',
        borderStyle: 'none',
    },

    input: {
        marginLeft: 'auto',
    }
})