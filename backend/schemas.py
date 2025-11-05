from pydantic import BaseModel

class ProductBase(BaseModel):
    name: str
    category: str
    image: str
    old_price: float
    new_price: float

class ProductCreate(ProductBase):
    pass

class Product(ProductBase):
    id: int

    class Config:
        orm_mode = True
