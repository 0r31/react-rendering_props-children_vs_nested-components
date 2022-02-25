# React rendering difference

## Nested components

`Title1` is nested in `Clock1` so each time the `Clock1` state changes, `Title1` is re-rendered.

## Children props

`Clock2` uses props.children and `Title2` is passed as a child so it renders only once.
