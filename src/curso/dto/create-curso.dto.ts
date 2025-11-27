import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';

export class CreateCursoDto {
    @IsString()
    name: string;

    @IsString()
    codigo: string;

    @IsString()
    titulo: string;

    @IsString()
    subtitulo: string;

    @IsString()
    descripcion: string;

    @IsString()
    nivel: string;

    @IsNumber()
    duracion_horas: string;

    @IsNumber()
    costo: number;

    @IsString()
    modalidad: string;

    @IsDate()
    fecha_inicio: Date;

    @IsBoolean()
    estado: boolean;
}
