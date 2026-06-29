'use client'

import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import Select, { type FilterOptionOption, type SingleValue, type StylesConfig } from 'react-select'

import styles from './VisaServiceSearch.module.css'

export type VisaServiceSearchOption = {
    readonly id: string
    readonly label: string
    readonly category: string
}

type VisaServiceSearchProps = {
    readonly services: readonly VisaServiceSearchOption[]
}

type VisaServiceSelectOption = VisaServiceSearchOption & {
    readonly value: string
}

const selectStyles: StylesConfig<VisaServiceSelectOption, false> = {
    container: (base) => ({
        ...base,
        minWidth: 0,
        width: '100%',
    }),
    control: (base, state) => ({
        ...base,
        minHeight: '2.55rem',
        border: 0,
        borderRadius: '999px',
        background: 'transparent',
        boxShadow: 'none',
        cursor: 'text',
        '&:hover': {
            border: 0,
        },
        opacity: state.isDisabled ? 0.72 : 1,
    }),
    valueContainer: (base) => ({
        ...base,
        padding: '0 0.2rem',
    }),
    input: (base) => ({
        ...base,
        color: 'var(--color-primary)',
        fontSize: '0.92rem',
    }),
    placeholder: (base) => ({
        ...base,
        color: 'rgba(21, 18, 76, 0.48)',
        fontSize: '0.92rem',
    }),
    singleValue: (base) => ({
        ...base,
        color: 'var(--color-primary)',
        fontSize: '0.92rem',
        fontWeight: 700,
    }),
    dropdownIndicator: (base, state) => ({
        ...base,
        color: state.isFocused ? 'var(--button-red)' : 'rgba(21, 18, 76, 0.48)',
        padding: '0 0.65rem',
        transition: 'color 0.2s ease, transform 0.2s ease',
        transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : undefined,
        '&:hover': {
            color: 'var(--button-red)',
        },
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    menu: (base) => ({
        ...base,
        overflow: 'hidden',
        marginTop: '0.55rem',
        border: '1px solid rgba(21, 18, 76, 0.1)',
        borderRadius: '1rem',
        background: '#fff',
        boxShadow: '0 18px 42px rgba(21, 18, 76, 0.14)',
    }),
    menuList: (base) => ({
        ...base,
        maxHeight: '16rem',
        padding: '0.35rem',
    }),
    menuPortal: (base) => ({
        ...base,
        zIndex: 40,
    }),
    option: (base, state) => ({
        ...base,
        borderRadius: '0.75rem',
        background: state.isSelected ? 'var(--button-red)' : state.isFocused ? 'rgba(244, 20, 28, 0.08)' : 'transparent',
        color: state.isSelected ? '#fff' : 'var(--color-primary)',
        cursor: 'pointer',
        padding: '0.72rem 0.85rem',
        transition: 'background-color 0.16s ease, color 0.16s ease',
        '&:active': {
            background: 'rgba(244, 20, 28, 0.14)',
        },
    }),
    noOptionsMessage: (base) => ({
        ...base,
        color: 'var(--color-muted)',
        fontSize: '0.88rem',
        padding: '0.85rem',
    }),
}

function normalizeSearchValue(value: string) {
    return value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
}

export default function VisaServiceSearch({ services }: VisaServiceSearchProps) {
    const router = useRouter()
    const menuPortalTarget = typeof document === 'undefined' ? undefined : document.body

    const options = services.map((service) => ({
        ...service,
        value: service.id,
    }))

    function filterOption(option: FilterOptionOption<VisaServiceSelectOption>, rawInput: string) {
        const normalizedQuery = normalizeSearchValue(rawInput.trim())
        if (!normalizedQuery) {
            return true
        }

        return normalizeSearchValue(`${option.data.label} ${option.data.category}`).includes(normalizedQuery)
    }

    function handleServiceChange(option: SingleValue<VisaServiceSelectOption>) {
        if (!option) {
            return
        }

        router.push(`/servicos#servico-${option.id}`)
    }

    return (
        <div className={styles.wrapper}>
            <Search
                className={styles.icon}
                aria-hidden="true"
            />
            <Select<VisaServiceSelectOption, false>
                instanceId="visa-service-search"
                inputId="visa-service-search"
                aria-label="Busque aqui o serviço que você precisa"
                className={styles.select}
                options={options}
                value={null}
                onChange={handleServiceChange}
                placeholder="Busque aqui o serviço que você precisa"
                noOptionsMessage={() => 'Nenhum serviço'}
                filterOption={filterOption}
                formatOptionLabel={(option, meta) =>
                    meta.context === 'menu' ? (
                        <span className={styles.optionContent}>
                            <span>{option.label}</span>
                            <small>{option.category}</small>
                        </span>
                    ) : (
                        option.label
                    )
                }
                isSearchable
                menuPosition="fixed"
                menuPortalTarget={menuPortalTarget}
                styles={selectStyles}
            />
        </div>
    )
}
