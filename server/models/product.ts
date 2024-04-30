import mongoose, { Schema, Document, Types } from 'mongoose';

// Order Tracking Item Sub-Schema
const orderTrackingItemSchema = new Schema({
  inventoryItemId: { type: Types.ObjectId, ref: 'InventoryItem' },
  status: { type: String, required: true },
  lastUpdated: { type: Date, required: true },
  tracking: [
    {
      status: { type: String, required: true },
      timestamp: { type: Date, required: true }
    }
  ]
});

// SEO Sub-Schema
const seoSchema = new Schema({
  titleTag: String,
  metaDescription: String,
  keywords: [String],
  canonicalUrl: String,
  ogTitle: String,
  ogDescription: String,
  ogImage: String,
  schemaMarkup: {
    '@context': 'https://sang-logium.com/',
    '@type': 'Product',
    name: String,
    image: String,
    description: String,
    offers: {
      '@type': 'Offer',
      priceCurrency: String,
      price: Number
    }
  }
});

// Main Product Schema
const productSchema = new Schema({
  basic: {
    sku: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    series: String,
    model: String,
    title: { type: String, required: true },
    price: { type: Number, required: true }
  },
  type: { type: Types.ObjectId, ref: 'Type' },
  media: { images: [String] },
  details: {
    description: String,
    includedItems: [],
    compatibility: [String],
    certifications: [String],
    features: [String],
    targetAudience: { type: String, enum: ['children', 'adults'] }
  },
  specifications: {
    materials: [String],
    dimensions: { length: Number, width: Number, height: Number },
    weight: Number,
    countryOfOrigin: String,
    assemblyRequired: Boolean,
    units: { type: String, default: 'metric' }
  },
  stock: {
    isAvailable: Boolean,
    isLimitedAvailability: Boolean,
    isBackordered: Boolean,
    stockQuantity: Number
  },
  warranty: {
    duration: { type: Number, default: 2 },
    units: { type: String, default: 'years' },
    type: { type: String, default: 'Limited Manufacturer Warranty' },
    coverage: [String],
    link: String,
    status: {
      active: Boolean,
      expirationDate: Date
    }
  },
  orderTracking: {
    items: [orderTrackingItemSchema],
    overallStatus: String
  },
  returnPolicy: {
    isAllowed: Boolean,
    reason: String
  },
  cashback: {
    issued: Boolean,
    amount: Number,
    reason: String
  },
  seo: seoSchema,
  customerReviews: [{ type: Types.ObjectId, ref: 'Review' }],
  relatedProducts: [Types.ObjectId]
});

interface ProductDocument extends Document {
  // Include your product fields here for type safety
}

export const Product = mongoose.model<ProductDocument>(
  'Product',
  productSchema
);
