function createLibrary() {
    const books = [];
    const members = [];
    const transactions = [];

    return {
        addBook: function (book) {
            // Check if book exists, if so maybe just increment copies? 
            // The prompt adds distinct books. Let's assume unique ISBN adds new entry.
            const existing = books.find(b => b.isbn === book.isbn);
            if (existing) {
                existing.copies += book.copies;
            } else {
                books.push({ ...book }); // Store a copy
            }
        },

        addMember: function (member) {
            members.push({ ...member });
        },

        borrowBook: function (memberId, isbn) {
            const book = books.find(b => b.isbn === isbn);
            const member = members.find(m => m.id === memberId);

            if (!book) {
                console.error(`Book with ISBN ${isbn} not found.`);
                return false;
            }
            if (!member) {
                console.error(`Member with ID ${memberId} not found.`);
                return false;
            }

            // Check availability
            // Count active loans for this ISBN
            const activeLoansCount = transactions.filter(t => t.isbn === isbn && t.returnedAt === null).length;

            if (book.copies - activeLoansCount > 0) {
                transactions.push({
                    memberId,
                    isbn,
                    borrowedAt: new Date(),
                    returnedAt: null
                });
                return true;
            } else {
                console.log(`Book ${book.title} is not available.`);
                return false;
            }
        },

        returnBook: function (memberId, isbn) {
            // Find active loan
            const loan = transactions.find(t =>
                t.memberId === memberId &&
                t.isbn === isbn &&
                t.returnedAt === null
            );

            if (loan) {
                loan.returnedAt = new Date();
                return true;
            } else {
                console.error(`No active loan found for Member ${memberId} and Book ${isbn}.`);
                return false;
            }
        },

        getAvailableCopies: function (isbn) {
            const book = books.find(b => b.isbn === isbn);
            if (!book) return 0;

            const activeLoansCount = transactions.filter(t => t.isbn === isbn && t.returnedAt === null).length;
            return book.copies - activeLoansCount;
        },

        getMemberHistory: function (memberId) {
            const memberLoans = transactions.filter(t => t.memberId === memberId);

            // Map to required format: { isbn, title, borrowedAt, returnedAt }
            return memberLoans.map(loan => {
                const book = books.find(b => b.isbn === loan.isbn);
                return {
                    isbn: loan.isbn,
                    title: book ? book.title : 'Unknown Title', // Should always find book
                    borrowedAt: loan.borrowedAt,
                    returnedAt: loan.returnedAt
                };
            });
        },

        getOverdueBooks: function () {
            const now = new Date();
            const fourteenDaysInMs = 14 * 24 * 60 * 60 * 1000;

            return transactions
                .filter(t => t.returnedAt === null) // Active only
                .filter(t => (now - t.borrowedAt) > fourteenDaysInMs)
                .map(t => {
                    const book = books.find(b => b.isbn === t.isbn);
                    return {
                        isbn: t.isbn,
                        title: book ? book.title : 'Unknown',
                        memberId: t.memberId,
                        borrowedAt: t.borrowedAt
                    };
                });
        },

        searchBooks: function (query) {
            const lowerQuery = query.toLowerCase();
            return books.filter(b =>
                b.title.toLowerCase().includes(lowerQuery) ||
                b.author.toLowerCase().includes(lowerQuery)
            );
        }
    };
}

const library = createLibrary();

// Add books
library.addBook({ isbn: '123', title: '1984', author: 'Orwell', copies: 3 });
library.addBook({ isbn: '456', title: 'Dune', author: 'Herbert', copies: 2 });

// Add members
library.addMember({ id: 'M1', name: 'John', email: 'john@example.com' });
library.addMember({ id: 'M2', name: 'Jane', email: 'jane@example.com' });

// Borrow books
library.borrowBook('M1', '123');  // John borrows 1984
library.borrowBook('M2', '123');  // Jane borrows 1984

console.log('Available copies of 123:', library.getAvailableCopies('123'));  // 1

library.returnBook('M1', '123');  // John returns 1984

console.log('Member M1 History:');
console.log(library.getMemberHistory('M1'));
// [{ isbn: '123', title: '1984', borrowedAt: Date, returnedAt: Date }]

console.log('Overdue Books:', library.getOverdueBooks());  // Books not returned within 14 days
console.log('Search "orwell":', library.searchBooks('orwell'));  // Search by title or author
