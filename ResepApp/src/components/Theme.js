const colors = {
  primary: '#5A60FF',
  danger: '#FF0058',
  default: '#A7A7A7',
  default04: 'rgba(167, 167, 167, 0.4)',

  yellow: '#E5B42E',

  darkBlue: '#130999',

  black: '#000000',
  blackLight: '#0C0D34',
  blackLight08: 'rgba(12, 13, 52, 0.8)',

  white: '#FFFFFF',
  whiteLight: '#FFF8EE',
};

const texts = {
  hero: {
    fontFamily: 'Poppins-Bold',
    fontSize: 50,
    color: colors.white,
    textAlign: 'center',
  },
  title1: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    lineHeight: 30,
    color: colors.blackLight,
  },
  title2: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    lineHeight: 30,
    color: colors.blackLight,
  },
  title3: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    lineHeight: 24,
    color: colors.blackLight,
  },
  body: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 24,
    color: colors.blackLight08,
  },
  label: {
    fontFamily: 'Poppins-Reguler',
    fontSize: 16,
    textAlign: 'center',
  },
  error: {
    fontFamily: 'Poppins-Reguler',
    fontSize: 13,
    textAlign: 'left',
    color: colors.danger,
  },
  time: {
    fontFamily: 'Poppins-Reguler',
    fontSize: 13,
    textAlign: 'left',
    color: colors.blackLight08,
  },
};

export default {colors, texts};
