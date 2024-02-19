(function () {
  const inputText = document.getElementById('input-text');
  const uppercaseCheckbox = document.getElementById('uppercase');
  const colourBox = document.getElementById('colour');
  const fontSize = document.getElementById('size');
  const fontFamily = document.getElementById('family');
  const submitBtn = document.getElementById('submit-btn');
  const outputText = document.getElementById('output-text');

  const compose = (...fns) => {
    return Array.from(fns).reduceRight((accu, curr) => (data) => {
      return accu(curr(data));
    });
  };

  const getUpperCaseText = (text) => text.toUpperCase();

  const setElementText = (data) => {
    data.element.textContent = data.meta.text;
    return data;
  };

  const setElementTextColour = (data) => {
    data.element.style.color = data.meta.colour;
    return data;
  };

  const setElementFontSize = (data) => {
    data.element.style.fontSize = data.meta.fSize;
    return data;
  };

  const setElementFontFamily = (data) => {
    data.element.style.fontFamily = data.meta.fFamily;
    return data;
  };

  const handleButtonClick = () => {
    const isChecked = uppercaseCheckbox.checked;
    const text = isChecked ? getUpperCaseText(inputText.value) : inputText.value;

    const setOutputText = compose(setElementTextColour, setElementFontFamily, setElementFontSize, setElementText);
    const response = setOutputText({
      element: outputText,
      meta: {
        text,
        colour: colourBox.value,
        fSize: fontSize.value,
        fFamily: fontFamily.value,
      },
    });
    console.log({ response });
  };

  submitBtn.addEventListener('click', handleButtonClick);
})()