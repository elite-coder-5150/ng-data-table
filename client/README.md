# Data Table Component Documentation

## Overview

The Data Table component is designed to display tabular data in a structured and user-friendly format. It provides a flexible and customizable solution for presenting large datasets with features such as sorting, pagination, and filtering.

## Key Features

### 1. Tabular Display

The component organizes data in rows and columns, facilitating a clear and organized representation of information.

### 2. Sorting

Users can sort columns in ascending or descending order, enabling quick and intuitive exploration of data.

### 3. Pagination

To handle large datasets, the component supports pagination, allowing users to navigate through different pages of data.

### 4. Filtering

Users can apply filters to individual columns, helping them focus on specific subsets of data based on criteria.

### 5. Customization

The component offers customization options, allowing developers to tailor the appearance and behavior to meet specific project requirements.

## Properties

### 1. `data`

- **Type:** Array
- **Description:** The dataset to be displayed in the table.

### 2. `columns`

- **Type:** Array
- **Description:** Defines the columns of the table, including headers, data keys, and configuration.

### 3. `sortable`

- **Type:** Boolean
- **Description:** Enables or disables column sorting functionality.

### 4. `pagination`

- **Type:** Boolean
- **Description:** Enables or disables pagination for the table.

### 5. `pageSize`

- **Type:** Number
- **Description:** Specifies the number of rows per page when pagination is enabled.

## Usage

1. Import the Data Table component into your Angular application:

```typescript
import { DataTableComponent } from 'path-to-your-component';
```

2. Customize the component properties based on your specific requirements.

## Notes

- Ensure that the provided dataset (`data` property) and column definitions (`columns` property) match the expected structure.
- For additional styling and customization, refer to the component's stylesheet.

---

