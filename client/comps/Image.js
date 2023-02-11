import { useState,useEffect } from "react";

export default function Image({blob}) {
    const [source, setSource] = useState('')
    // console.log(blob)
    useEffect(() => {
        //the way used below is when we iterate over the messagelist array
        var blobs = new Blob([blob.file.body], {type: blob.file.mimeType})
        //the way used below is when we use the temp state to save the file data
        // var blobs = new Blob([blob.body], {type: blob.mimeType})
        const reader = new FileReader()
        reader.readAsDataURL(blobs);
        reader.onloadend = () => {
            setSource(reader.result)
        }
    }, [blob])

  return (
    <div>
        <img  src={source} width='100px' height='100px' />
    </div>
  )
}
