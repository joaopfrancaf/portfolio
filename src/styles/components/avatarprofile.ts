import {styled} from '../stitches.config'

export const StyledAvatarDiv = styled('div', {
    width: '21.75rem',
    height: '18.25rem',
    paddingBottom: '3.125rem',
    paddingTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '$bgcards',
    borderRadius: '1rem',
    
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',


    span: {
        marginTop: '1.875rem',
        marginBottom: '0.625rem',
        fontWeight: '700',
        fontSize: '$lg'
    },

    p: {
        fontSize:'$md',
    }
})