# disable-children-pointer-events

A disable-children-pointer-events is a container which needs to act as a receiver to all of its children's interaction events (such as clicks, hovers, etc.) It accomplishes this by disabling pointer events (via the `pointer-events: none` CSS class) for any of its children, including SVGs. 

