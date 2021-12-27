const Operations = {
  lowerCase: (text) => text.toLowerCase(),

  upperCase: (text) => text.toUpperCase(),

  reverseText: (text) => [...text].reverse().join(""),

  sentenceCase: (text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase(),

  inverseCase: (text) => {
    const response = [...text].map((letter) => {
      if (letter === letter.toUpperCase()) return letter.toLowerCase();
      if (letter === letter.toLowerCase()) return letter.toUpperCase();

      return letter;
    });

    return response.join("");
  },
};

export default Operations;