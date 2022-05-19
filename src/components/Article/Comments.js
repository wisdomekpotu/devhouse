import React, { Component } from 'react'

export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.commentBox = React.createRef();
    }

    componentDidMount() {
        let scriptEl = document.createElement("script");
        scriptEl.setAttribute("src", "https://giscus.app/client.js")
        scriptEl.setAttribute("crossorigin", "anonymous")
        scriptEl.setAttribute("async", true)
        scriptEl.setAttribute("data-repo", "wisdomekpotu/devhouse")
        scriptEl.setAttribute("issue-term", "title")
        scriptEl.setAttribute("data-repo-id", "R_kgDOHIrJQA")    
        scriptEl.setAttribute("data-reactions-enabled", "1")
        scriptEl.setAttribute("data-category-id", "DIC_kwDOHIrJQM4CPLPC")
        scriptEl.setAttribute("data-category", "Comments")
        scriptEl.setAttribute("data-theme", "dark")
        scriptEl.setAttribute("data-lang", "en")
        scriptEl.setAttribute("data-input-position", "bottom") 
        scriptEl.setAttribute("data-emit-metadata", "0")
        scriptEl.setAttribute("data-mapping", "pathname")
        scriptEl.setAttribute("theme", "github-light")
        this.commentBox.current.appendChild(scriptEl)
    }
    
    render() {
        return (
            <div style={{ width: '100%' }} id="comments">
                <div ref={this.commentBox}></div>
            </div>
        )
    }
}