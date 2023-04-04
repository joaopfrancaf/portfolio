import {styled} from '../stitches.config'

export const PostDiv = styled('div', {
    marginTop: '2rem',
    width: '59.5rem',
    height: '12.563rem',
    backgroundColor: '$bgcards',
    borderRadius: '1rem',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',

    display: 'flex',
    padding: '2.45rem'
})

export const ImagDiv = styled('div', {
    marginRight: '4rem'
})

export const DivText = styled('div', {

    p: {
        fontSize: '$md',
    },

    h4: {
        marginTop: '2rem',
        fontWeight: '400'
    }
})