import blogPageComponent from "./pageComponent/blogPageComponent.js";
class BlogPage {
open(){
    return browser.url('/blog/');
}

get blogComponent() {
    return blogPageComponent;
}
}
export default  new BlogPage();