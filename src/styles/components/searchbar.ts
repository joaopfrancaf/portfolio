import { styled } from '../stitches.config'

export const SearchBarDiv = styled('div', {
    minWidth: '59.5rem',
    width: 'auto',
    height: '5.375rem',

    backgroundColor: '$bgcards',
    borderRadius: '1rem',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: '0 2rem 0',

    input: {
        fontSize: '$lg',
        width: 'max-content',
        backgroundColor: '$bgcards',
        border: 0,
        outline: 'none',
        flexGrow: 1,
        fontWeight: '700',
        color: '$textcolor',

        '&::placeholder': {
            color: '$textcolor',
        },
    },

    a: {
        textDecoration: 'none',
        color: '$textcolor',
        fontSize: '$md',
        marginLeft: '1rem'
    },

    '&:hover': {
        boxShadow: '0 0 3pt 2pt cornflowerblue',
    }   

})