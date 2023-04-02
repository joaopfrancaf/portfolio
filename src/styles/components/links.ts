import {styled} from '../stitches.config'

export const StyledLinksDiv = styled('div', {
    backgroundColor: '$bgcards',
    width: '21.75rem',
    height: '21.75rem',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '1rem',
    padding: '1.25rem',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    
    li: {
        fontWeight: '400',
        fontSize: '$md',
        listStyle: 'none',
        margin: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
    }

})