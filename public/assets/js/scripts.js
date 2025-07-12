const articles = [
    {
        id: 1,
        title: "5 Proven Ways to Boost Your Productivity",
        author: "John Smith",
        date: "June 10, 2023",
        summary: "Discover effective techniques to enhance your daily productivity and achieve more in less time without sacrificing your well-being.",
        image: "https://via.placeholder.com/600x400?text=Productivity"
    },
    {
        id: 2,
        title: "Top Technology Trends Shaping 2023",
        author: "Emily Johnson",
        date: "June 5, 2023",
        summary: "An in-depth analysis of the groundbreaking technologies making an impact this year and their implications across industries.",
        image: "https://via.placeholder.com/600x400?text=Tech+Trends"
    },
    {
        id: 3,
        title: "The Complete Beginner's Guide to Web Development",
        author: "Michael Brown",
        date: "May 28, 2023",
        summary: "Everything you need to start your web development journey, from basic HTML to advanced JavaScript concepts.",
        image: "https://via.placeholder.com/600x400?text=Web+Dev"
    },
    {
        id: 4,
        title: "The Power of Continuous Learning",
        author: "Sarah Williams",
        date: "May 20, 2023",
        summary: "How the habit of constant learning can transform your career and personal life, with practical strategies to implement it.",
        image: "https://via.placeholder.com/600x400?text=Learning"
    },
    {
        id: 5,
        title: "Staying Motivated on Long-Term Projects",
        author: "David Wilson",
        date: "May 15, 2023",
        summary: "Proven strategies to maintain focus and motivation when working on projects that require months or years of dedication.",
        image: "https://via.placeholder.com/600x400?text=Motivation"
    },
    {
        id: 6,
        title: "The Future of Artificial Intelligence",
        author: "Robert Chen",
        date: "May 10, 2023",
        summary: "Exploring how AI is evolving and what breakthroughs we can expect in the coming years across various sectors.",
        image: "https://via.placeholder.com/600x400?text=AI+Future"
    },
    {
        id: 7,
        title: "Cybersecurity Best Practices for Small Businesses",
        author: "Lisa Rodriguez",
        date: "May 5, 2023",
        summary: "Essential security measures every small business should implement to protect against growing cyber threats.",
        image: "https://via.placeholder.com/600x400?text=Cybersecurity"
    },
    {
        id: 8,
        title: "Remote Work: Tools and Strategies for Success",
        author: "James Peterson",
        date: "April 28, 2023",
        summary: "The best tools and practices to maintain productivity and collaboration in a remote work environment.",
        image: "https://via.placeholder.com/600x400?text=Remote+Work"
    },
    {
        id: 9,
        title: "Blockchain Technology Explained",
        author: "Amanda Lee",
        date: "April 20, 2023",
        summary: "A comprehensive guide to understanding blockchain technology and its applications beyond cryptocurrency.",
        image: "https://via.placeholder.com/600x400?text=Blockchain"
    },
    {
        id: 10,
        title: "Data Visualization Techniques for Better Insights",
        author: "Thomas Baker",
        date: "April 15, 2023",
        summary: "How to effectively visualize complex data to uncover patterns and communicate findings clearly.",
        image: "https://via.placeholder.com/600x400?text=Data+Viz"
    },
    {
        id: 11,
        title: "The Rise of Quantum Computing",
        author: "Natalie Kim",
        date: "April 10, 2023",
        summary: "Understanding quantum computing principles and how they're poised to revolutionize various industries.",
        image: "https://via.placeholder.com/600x400?text=Quantum"
    },
    {
        id: 12,
        title: "Building Effective Machine Learning Models",
        author: "Daniel Harris",
        date: "April 5, 2023",
        summary: "Practical steps to develop accurate and efficient machine learning models for real-world applications.",
        image: "https://via.placeholder.com/600x400?text=ML+Models"
    },
    {
        id: 13,
        title: "The Ethics of Technology Development",
        author: "Sophia Martinez",
        date: "March 28, 2023",
        summary: "Examining the ethical considerations that should guide the development of new technologies.",
        image: "https://via.placeholder.com/600x400?text=Tech+Ethics"
    },
    {
        id: 14,
        title: "Cloud Computing: Choosing the Right Solution",
        author: "Kevin Adams",
        date: "March 20, 2023",
        summary: "How to evaluate and select the best cloud computing services for your business needs.",
        image: "https://via.placeholder.com/600x400?text=Cloud"
    },
    {
        id: 15,
        title: "User Experience Design Principles",
        author: "Olivia Wilson",
        date: "March 15, 2023",
        summary: "Fundamental UX design principles that create intuitive and engaging digital experiences.",
        image: "https://via.placeholder.com/600x400?text=UX+Design"
    }
];

// Pagination variables
const articlesPerPage = 10;
let currentPage = 1;

// DOM elements
const articlesContainer = document.getElementById('articles-container');
const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');
const pageNumbersContainer = document.getElementById('page-numbers');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderArticles();
    renderPageNumbers();
    setupMobileMenu();
});


// Render articles for current page
function renderArticles() {
    articlesContainer.innerHTML = '';
    
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const articlesToShow = articles.slice(startIndex, endIndex);
    
    if (articlesToShow.length === 0) {
        articlesContainer.innerHTML = '<div class="loading">No articles found</div>';
        return;
    }
    
    articlesToShow.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.className = 'article-card';
        articleCard.innerHTML = `
            <a href="article${article.id}.html">
                <img src="${article.image}" alt="${article.title}" class="article-image">
            </a>
            <div class="article-content">
                <h2 class="article-title"><a href="article${article.id}.html">${article.title}</a></h2>
                <div class="article-meta">By: ${article.author} | Last updated: ${article.date}</div>
                <p class="article-summary">${article.summary}</p>
            </div>
        `;
        articlesContainer.appendChild(articleCard);
    });
    
    // Update button states
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === Math.ceil(articles.length / articlesPerPage);
}

// Render page number buttons
function renderPageNumbers() {
    pageNumbersContainer.innerHTML = '';
    const totalPages = Math.ceil(articles.length / articlesPerPage);
    
    // Always show first page
    addPageNumber(1);
    
    // Show current page and nearby pages
    const startPage = Math.max(2, currentPage - 2);
    const endPage = Math.min(totalPages - 1, currentPage + 2);
    
    if (startPage > 2) {
        pageNumbersContainer.innerHTML += '<span>...</span>';
    }
    
    for (let i = startPage; i <= endPage; i++) {
        addPageNumber(i);
    }
    
    if (endPage < totalPages - 1) {
        pageNumbersContainer.innerHTML += '<span>...</span>';
    }
    
    // Always show last page if there's more than one page
    if (totalPages > 1) {
        addPageNumber(totalPages);
    }
}

function addPageNumber(page) {
    const pageNumber = document.createElement('span');
    pageNumber.className = 'page-number';
    if (page === currentPage) {
        pageNumber.classList.add('active');
    }
    pageNumber.textContent = page;
    pageNumber.addEventListener('click', () => {
        currentPage = page;
        renderArticles();
        renderPageNumbers();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    pageNumbersContainer.appendChild(pageNumber);
}

// Event listeners for pagination buttons
prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderArticles();
        renderPageNumbers();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < Math.ceil(articles.length / articlesPerPage)) {
        currentPage++;
        renderArticles();
        renderPageNumbers();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        
        // Toggle hamburger icon animation
        if (mobileMenu.classList.contains('active')) {
            hamburger.textContent = '✕';
        } else {
            hamburger.textContent = '☰';
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.top-bar') && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            hamburger.textContent = '☰';
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

