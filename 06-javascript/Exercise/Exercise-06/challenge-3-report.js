// Challenge 3: Complex Aggregation
console.log('--- Challenge 3: Complex Aggregation ---');

function generateProductReport(products) {
    const report = {
        totalProducts: products.length,
        totalValue: 0,
        averagePrice: 0,
        averageRating: 0,
        byCategory: {},
        stockStatus: {
            inStock: 0,
            outOfStock: 0,
            inStockPercentage: 0
        },
        priceRanges: {
            budget: 0,   // < 100
            midRange: 0, // 100 - 500
            premium: 0   // > 500
        },
        topRated: [],
        recommendations: []
    };

  
    const stats = products.reduce((acc, p) => {
        // Values
        acc.totalValue += p.price;
        acc.sumRating += p.rating;

        // Stock
        if (p.inStock) acc.inStock++;
        else acc.outOfStock++;

        // Price Ranges
        if (p.price < 100) acc.priceRanges.budget++;
        else if (p.price <= 500) acc.priceRanges.midRange++;
        else acc.priceRanges.premium++;

        // Category
        if (!acc.byCategory[p.category]) {
            acc.byCategory[p.category] = { count: 0, totalValue: 0, products: [] };
        }
        acc.byCategory[p.category].count++;
        acc.byCategory[p.category].totalValue += p.price;
        acc.byCategory[p.category].products.push(p.name); // Storing name for brevity

        // Recommendations
        if (p.rating >= 4.5 && p.inStock) {
            acc.recommendations.push(p);
        }

        return acc;
    }, {
        totalValue: 0,
        sumRating: 0,
        inStock: 0,
        outOfStock: 0,
        priceRanges: { budget: 0, midRange: 0, premium: 0 },
        byCategory: {},
        recommendations: []
    });

    // Fill report from stats
    report.totalValue = stats.totalValue;
    report.averagePrice = report.totalValue / report.totalProducts;
    report.averageRating = stats.sumRating / report.totalProducts;

    report.stockStatus.inStock = stats.inStock;
    report.stockStatus.outOfStock = stats.outOfStock;
    report.stockStatus.inStockPercentage = (stats.inStock / report.totalProducts) * 100;

    report.priceRanges = stats.priceRanges;
    report.byCategory = stats.byCategory;
    report.recommendations = stats.recommendations;

    // Top Rated (sort copy)
    report.topRated = [...products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    return report;
}

console.log('Product Report:', generateProductReport(products));
