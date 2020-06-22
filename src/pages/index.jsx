import React from 'react';
import marked from 'marked';

const IndexPage = () => {
  marked.setOptions({
    gfm: true,
    breaks: true,
  });
  const defaultPreview =
    '# Header \n\n ## sub header \n\n [my link](https://danielvanc.com) \n\n  `inline code`  \n\n    code \n        block \n\n - list item \n\n>a blockquote \n\n **some bolded text**';
  const [
    previewText,
    setPreviewText,
  ] = React.useState(defaultPreview);
  const handleChange = e => {
    setPreviewText(
      marked(e.currentTarget.value)
    );
  };

  return (
    <div>
      <textarea
        id="editor"
        onKeyUp={handleChange}
      >
        {defaultPreview}
      </textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(previewText),
        }}
      />
    </div>
  );
};

export default IndexPage;
