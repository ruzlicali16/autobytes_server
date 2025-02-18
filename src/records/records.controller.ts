import { Body, Controller, Get, Post, Put, Delete, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Records } from 'src/schemas/records.schema';
import { RecordsService } from './records.service';

@Controller('records')
export class RecordsController {
    constructor(private recordsService: RecordsService) { }

    @ApiBody({ type: Records })
    @ApiOperation({ summary: 'Add new records', operationId: 'AddRecords' })
    @ApiResponse({ status: 200, type: Records })
    @Post('/create')
    create(@Body() records: Records) {
        return this.recordsService.create(records);
    }

    @ApiOperation({ summary: 'Get all records', operationId: 'GetRecords' })
    @ApiResponse({ status: 200, type: Records })
    @Get('/all')
    async findAll() {
        return this.recordsService.findAll();
    }

    @ApiOperation({ summary: 'Get records by id', operationId: 'GetRecord' })
    @ApiResponse({ status: 200, type: Records })
    @Get('id')
    async findById(@Query('id') id: string) {
        return await this.recordsService.findById(id);
    }

    @ApiOperation({ summary: 'Update records by id', operationId: 'UpdateRecords' })
    @ApiResponse({ status: 200, type: Records })
    @Put('/update')
    async update(@Query('id') id: string, @Body() Records: Records) {
        return await this.recordsService.update(id, Records);
    }

    @ApiOperation({ summary: 'Delete records by id', operationId: 'DeleteRecords' })
    @ApiResponse({ status: 200, type: Records })
    @Delete('/delete')
    async delete(@Query('id') id: string) {
        return await this.recordsService.delete(id);
    }
}
