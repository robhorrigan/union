# Hotspot

A hotspot is a container which needs to act as a receiver to all of its children's interaction events (such as clicks, hovers, etc.) It accomplishes this by increasing its own `z-index` while decreasing it's children's `z-index`.

> Note: Hotspots should almost always have a clear or translucent background, since they will stack on top of its children in the Z space.