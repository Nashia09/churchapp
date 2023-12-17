// Fonts.js
import { Font } from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'poppins-regular': require('././assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('././assets/fonts/Poppins-Bold.ttf'),
    'poppins-mi': require('././assets/fonts/Poppins-MediumItalic.ttf'),
    // Add other styles (bold, italic, etc.) if needed
  });
};
