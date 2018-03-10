export const country = (countryName) => {
  switch (countryName) {
    case 'Ukraine':
      return '🇺🇦'
      break;
    case 'Malaysia':
      return '🇲🇾'
      break;
    case 'United States':
      return '🇺🇸'
      break;
    case 'Canada':
      return '🇨🇦'
      break;
    case 'Peru':
      return '🇵🇪'
      break;
    case 'China':
      return '🇨🇳'
      break;
    case 'Europe':
      return '🇪🇺'
      break;
    case 'Indonesia':
      return '🇮🇩'
      break;
    default:
      return null
  }
}
