/**
 * GET /
 * Home page
 */

exports.homepage = async (req, res) => {
    const locals ={
        "title": "Notes APP",
        "description": "This is the home page"
    }

    res.render("index",locals);
}
exports.about = async (req, res) => {
    const locals ={
        "title": "About - Notes APP",
        "description": "This is the about page"
    }

    res.render("about",locals);
}