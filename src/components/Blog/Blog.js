import React from "react";
import './Blog.css'

const Blog = () => {
  return (
    <div>

        <h2 className="QNA-heading">Qeustion & Answer</h2>

      <div className="QNA">
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
                <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne">
                What is the Context API and how it works ?
                </button>
            </h2>
            <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body text-start">
                The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
                <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo">
                What is scemantic tag ?
                </button>
            </h2>
            <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body text-start">
                Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as header, footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.

                As the use of visually designed layouts progressed, programmers started to use a generic “non-semantic” tag like div. They would often give these elements a class or id attribute to describe their purpose. For example, instead of header this was often written as div className="header".
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
