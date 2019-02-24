# react-hook-selection :clipboard:

A React hook for accessing user selection.

## Installation

Using `npm`:

```sh
npm install --save react-hook-selection
```

Using `yarn`:

```sh
yarn add react-hook-selection
```

## Usage

```jsx
import React from 'react'
import useScreenOrientation from 'react-hook-selection'

const ComponentWithSelection = () => {
  const selection = useSelection()

  return (
    <Fragment>
      <p style={{userSelect: 'none'}}>
        Selection is: {JSON.stringify(selection)}
      </p>
      <p>Integer faucibus nec risus a ornare. Lorem ipsum <strong> dolor sit amet</strong>, consectetur adipiscing elit. Donec et purus sit amet lacus vulputate ultricies. Donec tincidunt, urna vitae sollicitudin mattis, erat massa placerat lorem, ut pharetra nulla dolor ullamcorper felis. Suspendisse id lectus sit amet <a href="https://npmjs.com">dolor egestas rhoncus</a> id non dui. Pellentesque sed rhoncus turpis, sed efficitur lacus. Aliquam erat volutpat. Morbi ornare pulvinar libero vitae maximus. Aliquam erat volutpat. Nam consequat augue vel eros tincidunt aliquam. In sodales pretium pulvinar. Donec in hendrerit urna. Mauris pharetra diam at justo porta viverra. Sed ipsum mauris, imperdiet et turpis sed, suscipit vestibulum neque. Sed auctor tortor vitae tellus feugiat, sit amet tincidunt lectus ultrices.</p>
    </Fragment>
  )
}
```

## Caveats

If you interpolate user selection directly in JSX, in order to avoid the browser potentially going absolutely bananas, make sure that the element that renders the selection as its content has [user selection disabled](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select), just like in the usage example above.

## Notes

Selection value is only accessible in plain text format. So even if the user has selected multiple elements with complex structure and rich formatting, this hook will only be able to provide you with the text content of the selected elements. 

## Contributions

Contributions are welcome. File bug reports, create pull requests, feel free to reach out at tothab@gmail.com.

## Licence

LGPL-3.0
