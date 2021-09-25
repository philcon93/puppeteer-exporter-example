# puppeteer-exporter-example

This is a simple PDF/PNG exporter using express and puppeteer under the hood

## Usage

There is one POST route at index `/`

**Body**

- type <string>: either 'pdf' or 'png'
- size <object>: an object of width, height, unit
    - width <string|number>: width of template
    - height <string|number>: height of template
    - unit <string>: unit of format sizes (px, in, pt, mm)
