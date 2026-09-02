const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const articles = await prisma.article.findMany({
        select: { slug: true, title: true }
    });
    console.log("Existing articles:", articles);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
