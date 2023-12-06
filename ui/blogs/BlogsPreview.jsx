"use client";
import React from "react";

import MarkdownPreview from "@uiw/react-markdown-preview";

const BlogsPreview = ({ blogsData }) => {
  console.log(blogsData);
  return (
    <div data-color-mode="light">
      <MarkdownPreview
        source={blogsData}
        rehypeRewrite={(node, index, parent) => {
          if (
            node.tagName === "a" &&
            parent &&
            /^h(1|2|3|4|5|6)/.test(parent.tagName)
          ) {
            parent.children = parent.children.slice(1);
          }
        }}
      />
    </div>
  );
};

export default BlogsPreview;
