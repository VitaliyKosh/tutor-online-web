import { Repository } from './repository';

export type ServiceOptions<ServiceRepository extends Repository> = {
    repository: ServiceRepository;
};

/*
 * Реализация взаимодействия с репозиторием. Модуль может переключаться между сервисами с одинаковым интерфейсом. В названии содержит название репозитория, который обслуживает
 */
export abstract class Service<ServiceRepository extends Repository> {
    $repository;

    constructor({ repository }: ServiceOptions<ServiceRepository>) {
        this.$repository = repository;
    }
}
