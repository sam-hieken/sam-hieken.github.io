import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Modified version of https://dev.to/rohitnirban/adding-page-titles-to-react-app-23oe
// that allows a meta description.
const PageHead = ({ title, description }) => {
    const location = useLocation();

    useEffect(() => {
        document.title = title;

        // Add or update meta description
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            const newMetaDescription = document.createElement("meta");
            
            newMetaDescription.name = "description";
            newMetaDescription.content = description;
            document.head.appendChild(newMetaDescription);
        }
    }, [ location, title ]);

    return null;
};

export default PageHead;
