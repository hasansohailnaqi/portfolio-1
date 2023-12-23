
const certificate={
name:'certificate',
title:'Certificate',
type:'document',
fields:[
    {
        name:'title',
        title:'Title',
        type:'string',
    },
    {
        name:'issue',
        title:'Issued By',
        type:'string'
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", }
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    },
    
    {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }]
      },

]
}
export default  certificate 