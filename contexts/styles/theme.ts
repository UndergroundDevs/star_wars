import { extendTheme} from '@chakra-ui/react'

const myTheme = extendTheme({
  fonts: {
    body: "'ABeeZee',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
  },

  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },

  colors: {
    primary: '#FFFFFF',
    secondary: '#B18B5A',
    background: '#FCF8F3',
    textTitle: '#3A3A3A',
    textParagraph: '#616161',
  },
})

export default myTheme