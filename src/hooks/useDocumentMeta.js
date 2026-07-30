import { useEffect } from "react";

/**
 * Sets the document title and meta description for the current route.
 * Google renders JS and reads these per-route, so this gives each page
 * (Home, About, Services, Portfolio, Contact, Pricing) its own distinct
 * search snippet instead of sharing the homepage's static tags.
 */
export function useDocumentMeta(title, description) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);
}
