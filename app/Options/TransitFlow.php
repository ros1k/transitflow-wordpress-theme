<?php

namespace App\Options;

use Log1x\AcfComposer\Options as Field;
use StoutLogic\AcfBuilder\FieldsBuilder;

class TransitFlow extends Field
{
    /**
     * The option page menu name.
     *
     * @var string
     */
    public $name = 'Transit Flow';

    /**
     * The option page document title.
     *
     * @var string
     */
    public $title = 'Transit Flow | Options';

    /**
     * The option page field group.
     *
     * @return array
     */
    public function fields()
    {
        $transitFlow = new FieldsBuilder('transit_flow');

        $transitFlow
            ->addTab('logo',['label' => 'Logo'])
                ->addImage('logo',['label' => 'Główne logo'])
            ->addTab('company',['label' => 'informacje na stronie'])
                ->addGroup('company')
                    ->addText('name',['label' => 'Nazwa firmy'])
                    ->addText('street',['label' => 'Ulica'])
                    ->addText('city',['label' => 'Miasto'])
                    ->addText('postcode',['label' => 'Kod pocztowy'])
                    ->addText('nip',['label' => 'Nip'])
                    ->addText('phone',['label' => 'Numer telefonu'])
                    ->addText('email',['label' => 'Adres email'])
                ->endGroup()
            ->addTab('Social media')
                ->addRepeater('social_media',['label' => ' ','button_label' => 'dodaj social media'])
                    ->addLink('link')
                    ->addTrueFalse('is_image',[
                        'label' => 'Ikonka w formie:',
                        'default_value' => 0,
                        'ui_on_text' => 'Obrazek',
                        'ui_off_text' => 'Kod svg',
                    ])
                    ->addImage('img')
                        ->conditional('is_image','==',1)
                    ->addTextarea('svg')
                        ->conditional('is_image','==',0)
                ->endRepeater()
            ->addTab('inne')
                ->addRepeater('items')
                    ->addText('item')
                ->endRepeater();

        return $transitFlow->build();
    }
}
