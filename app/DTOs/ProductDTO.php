<?php


namespace App\DTOs;


use Illuminate\Http\UploadedFile;


class ProductDTO
{

    private $name;
    private $slug;
    private $description;
    private $price;
    private $status;
//    private $barcode;
    private $stock;
    private $image;

    public function __construct(string $name, string $slug, string $description, float $price, bool $status, int $stock, ?UploadedFile $image)

    {
        $this->name = $name;
        $this->slug = $slug;
        $this->description = $description;
        $this->price = $price;
        $this->status = $status;
        $this->stock = $stock;
        $this->image = $image;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getSlug(): string
    {
        return $this->slug;
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @return float
     */
    public function getPrice(): float
    {
        return $this->price;
    }

    /**
     * @return bool
     */
    public function isStatus(): bool
    {
        return $this->status;
    }

    /**
     * @return string
     */
//    public function getBarcode(): string
//    {
//        return $this->barcode;
//    }

    /**
     * @return int
     */
    public function getStock(): int
    {
        return $this->stock;
    }

    /**
     * @return UploadedFile
     */
    public function getImage(): ?UploadedFile
    {
        return $this->image;
    }



}

