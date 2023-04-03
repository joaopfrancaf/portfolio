import {styled} from '../stitches.config'

export const StyledExperienciasDiv = styled('div', {
    width: '21.75rem',
    height: 'auto',
    backgroundColor: '$bgcards',
    borderRadius: '1rem',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',

    padding: '2rem',

    span: {
        fontSize: '$lg',
        fontWeight: '700',
    },

    ul: {
        marginLeft: '2rem',

        li: {
            margin: '1rem',
            
            span: {
                fontSize: '$md',
                fontWeight: '700'
            },

            p: {
                fontSize: '$md',
            }
        }
    }

})