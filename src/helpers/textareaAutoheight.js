export default function TextareaAutoheight() {

  let textareas = {
    nodes: Array.prototype.slice.call(document.querySelectorAll('textarea')),
    list: []
  };

  const onKeyDown = event => {
    const index = textareas.nodes.indexOf(event.target);
    const element = textareas.list[index];

    setTimeout(() => {
      // При увеличении длины строки высота не может уменьшиться
      if ((event.target.textLength > element.length && event.target.scrollHeight > element.height) || event.target.textLength < element.length) {
        event.target.removeAttribute('style');
        event.target.style.height = `${event.target.scrollHeight + 4}px`;
      }

      // записываем данные в объект
      element.height = event.target.scrollHeight;
      element.length = event.target.textLength;
    }, 0);
  };

  textareas.nodes.forEach(textarea => {
    const element = { element: textarea };
    textareas.list.push(element);
    textarea.addEventListener('keydown', onKeyDown);
  });

}
