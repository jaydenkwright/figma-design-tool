const { GraphQLObjectType, 
    GraphQLInt, 
    GraphQLString,  
    GraphQLList,
    GraphQLSchema,
    GraphQLFloat, 
} = require('graphql')
const axios = require('axios')

// Document
const DocumentType = new GraphQLObjectType({
    name: 'Document',
    fields: () => ({
        id: { type: GraphQLString},
        name: { type: GraphQLString},
        type: { type: GraphQLString },
        children: { type: new GraphQLList(CanvasType) }
    })
})

// Canvas 
const CanvasType = new GraphQLObjectType({
    name: 'canvas',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        type: { type: GraphQLString },
        children: { type: new GraphQLList(FrameType) }, 
        backgroundColor: { type: ColorType }
    })
})

const FrameType = new GraphQLObjectType({
    name: 'frame',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        type: { type: GraphQLString },
        blendMode: { type: GraphQLString },
        children: { type: new GraphQLList(VectorType) }
    })
})

const VectorType = new GraphQLObjectType({
    name: 'vector',
    fields: () => ({
        id: { type: GraphQLString},
        name: { type: GraphQLString },
        type: { type: GraphQLString },
        blendMode: { type: GraphQLString },
        absoluteBoundingBox: { type: BoundingBoxType},
        constraints: { type: ConstraintType },
        fills: { type: new GraphQLList(FillsType) },
        children: { type: new GraphQLList(VectorType)}
    
    })
})

const BoundingBoxType = new GraphQLObjectType({
    name: 'boundingBox',
    fields: () => ({
        x: { type: GraphQLInt},
        y: { type: GraphQLInt},
        width: { type: GraphQLInt},
        height: { type: GraphQLInt}
    })
})

const ConstraintType = new GraphQLObjectType({
    name: 'constraint',
    fields: () => ({
        vertical: { type: GraphQLString },
        horizontal: { type: GraphQLString }
    })
})

const FillsType = new GraphQLObjectType({
    name: 'fills',
    fields: () => ({
        blendMode: { type: GraphQLString },
        type: { type: GraphQLString },
        color: { type: ColorType }
    })
})

const ColorType = new GraphQLObjectType({
    name: 'colors',
    fields: () => ({
        r: { type: GraphQLFloat },
        g: { type: GraphQLFloat },
        b: { type: GraphQLFloat },
        a: { type: GraphQLFloat }
    })
})

// images
const ImageType = new GraphQLObjectType({
    name: 'images',
    fields: () => ({
        err: { type: GraphQLString},
        images: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        document: {
            type: DocumentType,
            resolve(parent, args, context){
                return axios.get(`http://localhost:5000/figma/document/`, 
                {withCredentials: true, 
                    headers: {
                        'authorization': `${context.cookies.access_token}`
                    }})
                    .then(response => response.data)
            }
        }   
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
