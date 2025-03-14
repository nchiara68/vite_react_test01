// /data/invoicesData.ts
export interface Invoice {
    id: number;
    customer: string;
    amount: number;
    status: 'Paid' | 'Pending' | 'Overdue';
    date: string; // ISO date string (e.g., '2024-03-10')
  }
  
  export const invoices: Invoice[] = [
    { id: 101, customer: "John Doe", amount: 250.5, status: "Paid", date: "2024-03-10" },
    { id: 102, customer: "Jane Smith", amount: 180.0, status: "Pending", date: "2024-03-05" },
    { id: 103, customer: "Michael Brown", amount: 300.0, status: "Overdue", date: "2024-02-20" },
    { id: 104, customer: "Alice Johnson", amount: 450.0, status: "Paid", date: "2024-01-15" },
    { id: 105, customer: "Bob Williams", amount: 150.0, status: "Pending", date: "2024-03-01" },
    { id: 106, customer: "Emily Davis", amount: 200.0, status: "Paid", date: "2024-02-28" },
    { id: 107, customer: "Chris Wilson", amount: 380.0, status: "Overdue", date: "2024-02-10" },
    { id: 108, customer: "Olivia Taylor", amount: 410.0, status: "Paid", date: "2024-01-25" },
    { id: 109, customer: "Daniel Clark", amount: 275.0, status: "Pending", date: "2024-03-03" },
    { id: 110, customer: "Sophia Martinez", amount: 500.0, status: "Paid", date: "2024-03-08" },
  ];
  