import { Prisma } from '@prisma/client';
import { ApiErrors } from './index';

export class PrismaErrors {
  static handlePrismaError(err: Prisma.PrismaClientKnownRequestError): ApiErrors {
    switch (err.code) {
      case 'P1001':
        return ApiErrors.Conflict('Unable to connect to the database. Please try again later.');
      case 'P2002':
        return ApiErrors.Conflict('Record already exists. The data you are trying to enter already exists.');
      case 'P2025':
        return ApiErrors.NotFound('Record not found.');
      case 'P2003':
        return ApiErrors.BadRequest('Foreign key constraint failed.');
      case 'P2004':
        return ApiErrors.BadRequest('A constraint failed on the database.');
      case 'P2005':
        return ApiErrors.BadRequest('The value stored in the database is invalid for the type.');
      case 'P2006':
        return ApiErrors.BadRequest("The provided value for the column is too long for the column's type.");
      case 'P2007':
        return ApiErrors.BadRequest('Data validation error.');
      case 'P2008':
        return ApiErrors.InternalServerError('Failed to parse the query. The query is incorrect.');
      case 'P2009':
        return ApiErrors.InternalServerError('Failed to validate the query. The query is incorrect.');
      case 'P2010':
        return ApiErrors.InternalServerError('Raw query failed. Check the query.');
      case 'P2011':
        return ApiErrors.BadRequest('Null constraint violation. Trying to set a non-nullable field to null.');
      case 'P2012':
        return ApiErrors.BadRequest('Missing a required value.');
      case 'P2013':
        return ApiErrors.BadRequest('Missing the required argument for the field.');
      case 'P2014':
        return ApiErrors.InternalServerError('The change you are trying to make would violate a required relation.');
      case 'P2015':
        return ApiErrors.InternalServerError('A related record could not be found.');
      case 'P2016':
        return ApiErrors.InternalServerError('Query interpretation error.');
      case 'P2017':
        return ApiErrors.InternalServerError('The records for the relation are not connected.');
      case 'P2018':
        return ApiErrors.InternalServerError('The required connected records were not found.');
      case 'P2019':
        return ApiErrors.InternalServerError('Input error.');
      case 'P2020':
        return ApiErrors.InternalServerError('Value out of range for the type.');
      case 'P2021':
        return ApiErrors.InternalServerError('Table does not exist.');
      case 'P2022':
        return ApiErrors.InternalServerError('Column does not exist.');
      case 'P2023':
        return ApiErrors.InternalServerError('Inconsistent column data.');
      case 'P2024':
        return ApiErrors.InternalServerError('Timed out while connecting to the database.');
      case 'P2026':
        return ApiErrors.InternalServerError('The current database does not support a query.');
      default:
        return ApiErrors.InternalServerError();
    }
  }
}

// P2002 (Unique constraint failed): Виникає, коли порушується унікальне обмеження. Наприклад, спроба додати запис з існуючим значенням унікального поля (наприклад, email).
// P2025 (Record not found): Запис, який ви намагаєтесь отримати або видалити, не існує.
// P1001 (Unable to connect to the database): Невдала спроба підключитися до бази даних.
// P2003 (Foreign key constraint failed): Виникає при порушенні зовнішнього ключа.
// P2004 (A constraint failed): Виникає при порушенні будь-якого іншого обмеження.
// P2005 (Invalid value): Значення, збережене у базі даних, не відповідає типу.
// P2006 (Value too long): Значення, яке ви намагаєтеся зберегти, занадто довге для типу поля.
// P2007 (Data validation error): Помилка перевірки даних.
// P2008 (Query parsing error): Помилка парсингу запиту.
// P2009 (Query validation error): Помилка перевірки запиту.
// P2010 (Raw query failed): Помилка сирого запиту.
// P2011 (Null constraint violation): Спроба встановити non-nullable поле в null.
// P2012 (Missing required value): Відсутнє обов'язкове значення.
// P2013 (Missing required argument): Відсутній обов'язковий аргумент для поля.
// P2014 (Required relation violation): Порушення зв'язку.
// P2015 (Related record not found): Відсутній пов'язаний запис.
// P2016 (Query interpretation error): Помилка інтерпретації запиту.
// P2017 (Relation records not connected): Зв'язані записи не підключені.
// P2018 (Required connected records not found): Відсутні необхідні пов'язані записи.
// P2019 (Input error): Помилка введення.
// P2020 (Value out of range): Значення виходить за межі діапазону типу.
// P2021 (Table does not exist): Таблиця не існує.
// P2022 (Column does not exist): Колонка не існує.
// P2023 (Inconsistent column data): Неконсистентні дані у колонці.
// P2024 (Timed out): Час очікування підключення до бази даних вичерпано.
// P2026 (Unsupported query): Запит не підтримується поточною базою даних.
