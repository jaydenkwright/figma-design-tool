const { GraphQLObjectType, GraphQLInt, GraphQLString,  } = require('graphql')

// Document
const DocumentType = new GraphQLObjectType({
    name: 'Document',
    fields: () => ({
        id: { type: GraphQLString},
        name: { type: GraphQLString},
        type: { type: GraphQLString },
        children: { type: CanvasType }
    })
})

// Canvas 
const CanvasType = new GraphQLObjectType({
    name: 'canvas',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        type: { type: GraphQLString },
        children: { type: FrameType } 
    })
})

const FrameType = new GraphQLObjectType({
    name: 'frame',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        type: { type: GraphQLString },
        blendMode: { type: GraphQLString },
        children: { type: VectorType }
    })
})

