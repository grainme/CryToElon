/* eslint-disable react-refresh/only-export-components */
"use client";

import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import { ArrowArcRight } from "@phosphor-icons/react";

const data: Cryptocurrency[] = [
  {
    rank: 1,
    name: "Bitcoin",
    ticker: "BTC",
    price: 69362.2,
    change1h: 0.42,
    change24h: 0.34,
    change7d: 1.44,
    marketCap: 1366964737657,
    volume24h: 27891691466,
    circulatingSupply: 19707631,
    priceGraph: "bitcoin-7d-price-graph",
  },
  {
    rank: 2,
    name: "Ethereum",
    ticker: "ETH",
    price: 3778.74,
    change1h: 0.47,
    change24h: 1.37,
    change7d: 3.22,
    marketCap: 454003842979,
    volume24h: 13100647102,
    circulatingSupply: 120146772,
    priceGraph: "ethereum-7d-price-graph",
  },
  {
    rank: 50,
    name: "Maker",
    ticker: "MKR",
    price: 2572.14,
    change1h: 0.04,
    change24h: 1.81,
    change7d: 6.24,
    marketCap: 2386122211,
    volume24h: 54884720,
    circulatingSupply: 927681,
    priceGraph: "maker-7d-price-graph",
  },
  {
    rank: 4,
    name: "Binance Coin",
    ticker: "BNB",
    price: 650.0,
    change1h: 0.62,
    change24h: 2.4,
    change7d: 8.14,
    marketCap: 95924440563,
    volume24h: 2741123937,
    circulatingSupply: 147575066,
    priceGraph: "bnb-7d-price-graph",
  },
  {
    rank: 16,
    name: "Bitcoin Cash",
    ticker: "BCH",
    price: 467.34,
    change1h: 0.06,
    change24h: 0.09,
    change7d: 0.42,
    marketCap: 9213618551,
    volume24h: 257313743,
    circulatingSupply: 19714834,
    priceGraph: "bitcoin-cash-7d-price-graph",
  },
  {
    rank: 44,
    name: "Bittensor",
    ticker: "TAO",
    price: 384.17,
    change1h: 0.05,
    change24h: 0.37,
    change7d: 9.81,
    marketCap: 2643477625,
    volume24h: 28328561,
    circulatingSupply: 6880327,
    priceGraph: "bittensor-7d-price-graph",
  },
  {
    rank: 100,
    name: "Gnosis",
    ticker: "GNO",
    price: 326.66,
    change1h: 0.03,
    change24h: 3.95,
    change7d: 7.85,
    marketCap: 845925593,
    volume24h: 14476858,
    circulatingSupply: 2589588,
    priceGraph: "gnosis-gno-7d-price-graph",
  },
  {
    rank: 5,
    name: "Solana",
    ticker: "SOL",
    price: 166.0,
    change1h: 0.18,
    change24h: 0.19,
    change7d: 3.96,
    marketCap: 76328886298,
    volume24h: 1885751630,
    circulatingSupply: 459807116,
    priceGraph: "solana-7d-price-graph",
  },
  {
    rank: 39,
    name: "Monero",
    ticker: "XMR",
    price: 156.42,
    change1h: 0.35,
    change24h: 0.59,
    change7d: 8.66,
    marketCap: 2885193938,
    volume24h: 55588825,
    circulatingSupply: 18445507,
    priceGraph: "monero-7d-price-graph",
  },
  {
    rank: 65,
    name: "Aave",
    ticker: "AAVE",
    price: 100.26,
    change1h: 0.44,
    change24h: 3.55,
    change7d: 5.54,
    marketCap: 1488293132,
    volume24h: 76149570,
    circulatingSupply: 14844863,
    priceGraph: "aave-7d-price-graph",
  },
];

export type Cryptocurrency = {
  rank: number;
  name: string;
  ticker: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  priceGraph: string;
};

// Map coin names to their image filenames
const coinImages = {
  Bitcoin: "btc.svg",
  Ethereum: "eth.svg",
  Maker: "mkr.svg",
  "Binance Coin": "bnb.svg",
  "Bitcoin Cash": "bch.svg",
  Bittensor: "tao.svg",
  Gnosis: "gno.svg",
  Solana: "sol.svg",
  Monero: "Monero.svg",
  Aave: "aave.svg",
};

export const columns: ColumnDef<Cryptocurrency>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowArcRight className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div>
        <img
          src={`/public/coins/${coinImages[row.getValue("name")]}`}
          alt={`${row.getValue("name")} logo`}
          className="h-8 w-8 inline-block mr-2"
        />
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "ticker",
    header: "Ticker",
    cell: ({ row }) => <div>{row.getValue("ticker")}</div>,
    enableSorting: false, // Ticker column typically does not require sorting
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowArcRight className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      return (
        <div>
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
      );
    },
  },
  {
    accessorKey: "marketCap",
    header: "Market Cap",
    cell: ({ row }) => (
      <div>{(row.getValue("marketCap") / 1e9).toFixed(2)}B</div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "volume24h",
    header: "Volume(24h)",
    cell: ({ row }) => (
      <div>{(row.getValue("volume24h") / 1e9).toFixed(2)}B</div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "circulatingSupply",
    header: "Low (1min)",
    cell: ({ row }) => (
      <div>{row.getValue("circulatingSupply").toLocaleString()}</div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "circulatingSupply",
    header: "High (1min)",
    cell: ({ row }) => (
      <div>{row.getValue("circulatingSupply").toLocaleString()}</div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "priceGraph",
    header: "Last 7 Days",
    cell: ({ row }) => (
      <img src={`/${row.getValue("priceGraph")}.png`} alt="7-day price graph" />
    ),
    enableSorting: false, // This column typically does not require sorting
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const crypto = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(crypto.ticker)}
            >
              Copy ticker
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    enableSorting: false, // Actions column typically does not require sorting
  },
];

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter Names..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
