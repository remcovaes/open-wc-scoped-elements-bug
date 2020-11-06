The bug is in @open-wc/scoped-elements@1.3.0

# Repro

- `npm install`
- `npm build`
- `npm serve`
- Open the page
- See no tag name on the page

Workaround:
- `npm install @open-wc/scoped-elements@1.2.4`
- `npm build`
- See a scoped tag name on the page
